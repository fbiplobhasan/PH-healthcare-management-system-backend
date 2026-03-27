import app from "./app";
import { envVariables } from "./config/env";

// Start the server
const bootstrap = () => {
  try {
    app.listen(envVariables.PORT, () => {
      console.log(
        `Server is running on http://localhost: ${envVariables.PORT}`,
      );
    });
  } catch (error) {
    console.log("Failed to start server:", error);
  }
};

bootstrap();
