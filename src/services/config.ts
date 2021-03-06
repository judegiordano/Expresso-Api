import dotenv from "dotenv";
dotenv.config();

const config = {
	PORT: process.env.PORT || 3000,
	CONNECTION_STRING: process.env.CONNECTION_STRING ?? "",
	JWT_SECRET: process.env.JWT_SECRET ?? "",
	NODE_ENV: process.env.NODE_ENV ?? "development",
	RATE_LIMIT: {
		windowMs: 15 * 60 * 1000,
		max: 50
	}
};

if (!config.JWT_SECRET) {
	throw new Error("JWT_SECRET is not set.");
}
if (!config.CONNECTION_STRING) {
	throw new Error("CONNECTION_STRING is not set.");
}

export default config;