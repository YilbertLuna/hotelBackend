export const dashboardController = (req, res) => {
    try {
        res.set("Content-Type", "application/json")
        const user = req.User
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: `error interno del servidor ${error.message}`})
    }
}