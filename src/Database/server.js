app.post("/api/facebook-login", async (req, res) => {
    const { profile_id, name, email } = req.body;

    try {
        const query = `
            INSERT INTO users (profile_id, name, email)
            VALUES ($1, $2, $3)
            ON CONFLICT (profile_id) DO UPDATE
            SET name = EXCLUDED.name, email = EXCLUDED.email
            RETURNING *;
        `;
        const values = [profile_id, name, email];
        const result = await pool.query(query, values);

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error during database operation:", error);
        res.status(500).json({ error: "Failed to login with Facebook" });
    }
});