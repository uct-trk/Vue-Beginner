<template>
  <div class="post">
    <!--header-->
    <header class="header">
      <div class="header-author">
        <Avatar :size="40" />
        <div class="header-author-info">
          <div>
            <CustomText tag="b">Uğurcan TÜRK</CustomText>
          </div>
          <div>
            <CustomText size="xsmall">Istanbul, Turkey</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </header>
    <!--media-->
    <div class="post-media">
      <img
        src="https://images.unsplash.com/photo-1627555140317-652db1c13aa0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        alt=""
      />
    </div>
    <!--actions-->
    <div class="actions-buttons">
         <button type="button">
          <IconLike />
        </button>
         <button type="button">
          <IconComment />
        </button>
         <button type="button">
          <IconDirect />
        </button>
         <button class="action-save" type="button">
          <IconSave />
        </button>
    </div>
    <!--view count-->

    <div class="view-count">
        <CustomText tag="b">1.350 likes</CustomText>
    </div>
    <!--comments-->
    <!--datetime-->
    <!--comment-->
    <!--comment form-->
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import CustomText from "./CustomText.vue";
import IconMore from "@/icons/more.svg";
import IconLike from "@/icons/like.svg";
import IconComment from "@/icons/comment.svg";
import IconDirect from "@/icons/direct.svg";
import IconSave from "@/icons/save.svg";

export default {
  name: "Post",
  components: { Avatar, CustomText, IconMore, IconLike, IconComment, IconDirect, IconSave },
};
</script>

<style scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}
.header {
  padding-left: 16px;
  padding-right: 16px;
  height: 60px;
  display: flex;
  align-items: center;
  &-author {
    display: flex;
    align-items: center;

    &-info {
      margin-left: 16px;
    }
  }
  &-more {
    margin-left: auto;
  }
}
.actions-buttons {
  padding-left: 16px;
  padding-right: 16px;
  height: 45px;
  display: flex;
  align-items: center;

  button{
      margin-right: 16px;
  }
  .action-save{
      margin-left: auto;
      margin-right: 0;
  }
}

.view-count{
    padding-left: 16px;
}
</style>
