import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account = new Account(this.client);

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount(email, password) {
    try {
      const user = await this.account.create({
        userId: ID.unique(),
        email: email,
        password: password,
      });

      if (user) {
        return this.login(email, password);
      } else {
        throw new Error("Failed to create account");
      }
      console.log("Account created successfully:", user);
    } catch (error) {
      console.error("Error creating account:", error);
      return null;
    }
  }

  async login(email, password) {
    try {
      const session = await this.account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      console.log("Login successful:", session);
      return session;
    } catch (error) {
      console.error("Login failed:", error);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions("current");
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
      return null;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      console.log("Current user:", user);
      return user;
    } catch (error) {
      console.error("Failed to get current user:", error);
      return null;
    }

    return null;
  }
}

const authService = new AuthService();

export default authService;
