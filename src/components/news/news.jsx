import { Requests } from "../../api/apiRequests";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import * as S from "./style";
import { NewPost } from "../newPost/newPost";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
export const News = () => {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userPayload);
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    name: user.name,
  });

  const fetch = useCallback(async () => {
    setPosts(await Requests.FetchPosts());
  }, []);

  useEffect(() => {
    if (!posts) {
      fetch();
    }
  }, [posts]);

  const createPost = useCallback(async () => {
    await Requests.createNewPost(newPost);
    setOpen(false);
  }, [newPost]);

  return (
    <S.StyledWrapper>
      {open && (
        <NewPost
          data={newPost}
          createPost={createPost}
          setData={setNewPost}
          setOpen={setOpen}
        />
      )}

      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        sx={{ maxWidth: "180px", margin: "10px" }}
        //  disabled={!newPost.content && !newPost.title}
      >
        Add post
      </Button>
      <S.StyledNewsList>
        {posts?.map((i) => (
          <S.StyledNewsCard
            key={i.id}
            onClick={() => navigate(`/home/news/${i.id}`)}
          >
            <S.StyledPostHeader>
              <S.StyledPostAuthor>{i.user_name}</S.StyledPostAuthor>
              <S.StyledNewsDate>{i.date}</S.StyledNewsDate>
            </S.StyledPostHeader>
            <S.StyledNewsTitle>{i.title}</S.StyledNewsTitle>
            <S.StyledPostContent>{i.content}</S.StyledPostContent>
          </S.StyledNewsCard>
        ))}
      </S.StyledNewsList>
    </S.StyledWrapper>
  );
};
