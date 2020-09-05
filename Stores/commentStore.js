import { decorate, observable } from "mobx";
import instance from "./instance";

class CommentStore {
  comments = [];

  fetchComments = async () => {
    try {
      const res = await instance.get("/comments");
      this.comments = res.data;
      console.log(comments);
    } catch (error) {
      console.log("TRIP-STORE >> fetchComments() --->", error);
    }
  };

  createComment = async (newComment) => {
    try {
      const res = await instance.post(
        `/trips/${newComment.tripId}/comments`,
        newComment
      );
      this.comments.push(res.data);
    } catch (error) {
      console.log("TRIP-STORE >> createComment() --->", error);
    }
  };

  updateComment = async (oldComment) => {
    try {
      await instance.put(`/comments/${oldComment.id}`, oldComment);
      const foundComment = this.comments.find(
        (comment) => comment.id === oldComment.id
      );
      for (const key in oldComment) foundComment[key] = oldComment[key];
    } catch (error) {
      console.log("TRIP-STORE >> updateComment() --->", error);
    }
  };

  deleteComment = async (commentId) => {
    try {
      await instance.delete(`/comments/${commentId}`);
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
    } catch (error) {
      console.log("TRIP-STORE >> deleteComment() --->", error);
    }
  };
}

decorate(CommentStore, {
  comments: observable,
});

const commentStore = new CommentStore();
commentStore.fetchComments();

export default commentStore;
