import jwt from "jsonwebtoken";

export function createjwtToken(student) {
    return jwt.sign(student, "password", { expiresIn: 300 });
}

export async function authorization(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader !== undefined) {
        const bearerToken = authHeader.split(" ");
        const token = bearerToken[1];
        try {
            const payload = await verifyJwtToken(token);
            console.log(payload)
            req.payload = payload;
            next();
        } catch (error) {
            res.send({
                Message: error,
            });
        }
    }
    else {
        res.send({
            Message: " Unauthorization in authorization ",
        });
    }
}

export async function verifyJwtToken(token) {
    return jwt.verify(token, "password");
}