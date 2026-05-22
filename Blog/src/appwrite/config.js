import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class AppwriteService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost(title, slug, content, featured_image, status, user_id) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        ID.unique(),
        {
          title,
          slug,
          content,
          featured_image,
          status,
          user_id,
        },
      );
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  async updatePost(postId, title, slug, content, featured_image, status) {
    try {
      const post = await this.databases.updateDocument({
        databaseId: conf.appWriteDatabaseId,
        collectionId: conf.appWriteCollectionId,
        documentId: postId,
        data: {
          title: title,
          slug: slug,
          content: content,
          featured_image: featured_image,
          status: status,
        },
      });

      return post;
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  async deletePost(postId) {
    try {
      await this.databases.deleteDocument({
        databaseId: conf.appWriteDatabaseId,
        collectionId: conf.appWriteCollectionId,
        documentId: postId,
      });
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", true)]) {
    try {
      const posts = await this.databases.listDocuments({
        databaseId: conf.appWriteDatabaseId,
        collectionId: conf.appWriteCollectionId,
        queries: queries,
      });
      return posts.documents;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

  async getPostById(postId) {
    try {
      const post = await this.databases.getDocument({
        databaseId: conf.appWriteDatabaseId,
        collectionId: conf.appWriteCollectionId,
        documentId: postId,
      });
      return post;
    } catch (error) {
      console.error("Error fetching post:", error);
      throw error;
    }
  }

  // File Upload to Appwrite Storage
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }

  // Delete file from Appwrite Storage
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appWriteBucketId, fileId);

      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
      throw error;
    }
  }

  // Get file URL from Appwrite Storage
  getFileURL(fileId) {
    return this.storage.getFileView(conf.appWriteBucketId, fileId).toString();
  }
}

const appwrite = new AppwriteService();

export default appwrite;
