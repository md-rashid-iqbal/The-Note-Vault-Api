import { Router } from 'express';

const router = Router();

// Placeholder routes jo login/register handling ko support karein
router.post('/register', (req, res) => {
    res.status(201).json({ success: true, message: "User registered successfully flags." });
});

router.post('/login', (req, res) => {
    res.status(200).json({ success: true, token: "mock-jwt-token" });
});

export default router;
