<template>
  <div class="row">
    <div v-for="item in 10" :key="item.id" class="col-md-12 reviews mb-2">
      <div class="doc-review review-listing">
        <ul class="comments-list list-unstyled">
          <li class="list-style-none">
            <div class="comment">
              <img class="avatar rounded-circle" alt="User Image"
                src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg" />
              <div class="comment-body ml-3">
                <div class="meta-data">
                  <span class="comment-author">Richard Wilson</span>
                  <span class="comment-date">Reviewed 2 Days ago</span>
                  <div class="review-count rating">
                    <font-awesome-icon icon="fa-solid fa-star" class="filled" />
                    <font-awesome-icon icon="fa-solid fa-star" class="filled" />
                    <font-awesome-icon icon="fa-solid fa-star" class="filled" />
                    <font-awesome-icon icon="fa-solid fa-star" class="filled" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                  </div>
                </div>
                <p class="recommended">
                  <font-awesome-icon icon="fa-solid fa-thumbs-up" /> I recommend
                  the doctor
                </p>
                <p class="comment-content mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation. Curabitur
                  non nulla sit amet nisl tempus
                </p>
                <div class="comment-reply">
                  <a class="comment-btn" href="#">
                    <font-awesome-icon icon="fa-solid fa-reply" /> Reply
                  </a>
                  <p class="recommend-btn">
                    <span class="mr-2">Recommend?</span>
                    <a href="#" class="like-btn">
                      <font-awesome-icon icon="fa-solid fa-thumbs-up" /> Yes
                    </a>
                    <a href="#" class="dislike-btn">
                      <font-awesome-icon icon="fa-solid fa-thumbs-down" /> No
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <ul class="comments-reply list-unstyled mt-3">
              <li>
                <div class="comment">
                  <img class="avatar rounded-circle" alt="User Image"
                    src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg" />
                  <div class="comment-body ml-3">
                    <div class="meta-data">
                      <span class="comment-author">Dr. Darren Elder</span>
                      <span class="comment-date">Reviewed 3 Days ago</span>
                    </div>
                    <p class="comment-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam. Curabitur non nulla sit
                      amet nisl tempus
                    </p>
                    <div class="comment-reply">
                      <a class="comment-btn" href="#">
                        <font-awesome-icon icon="fa-solid fa-reply" /> Reply
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.avatar {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
}

.comment {
  display: flex;
}

.comment .comment-body .meta-data {
  position: relative;
  margin-bottom: 10px;
}

span.comment-author {
  font-weight: 600;
  color: black;
  text-transform: capitalize;
}

span.comment-date {
  font-size: 14px;
}

.comment .comment-body .meta-data span {
  display: block;
  font-size: 16px;
  color: #757575;
}

.recommended {
  color: #28a745;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}

.comment .comment-body .meta-data .review-count {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 3px;
  right: 0;
  width: auto;
}

.rating {
  list-style: none;
  margin: 0 0 7px;
  padding: 0;
  width: 100%;
}

.review-listing>ul li .comments-reply {
  margin-left: 65px;
  padding: 0;
}

.rating .filled {
  color: #f4c150;
}

.review-listing>ul li .comment .comment-body .comment-reply .comment-btn {
  color: #20c0f3;
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
}

.review-listing .recommend-btn {
  float: right;
  color: #757575;
  font-size: 14px;
  padding: 5px 0;
  margin-bottom: 0;
}

.review-listing .recommend-btn {
  float: right;
  color: #757575;
  font-size: 14px;
  padding: 5px 0;
  margin-bottom: 0;
}

.review-listing .recommend-btn a {
  border: 1px solid rgba(128, 137, 150, 0.4);
  border-radius: 4px;
  display: inline-block;
  padding: 4px 12px;
  color: #757575;
  margin-left: 3px;
  margin-right: 3px;
  transition: all 0.3s;
}

.reviews {
  border: 1px solid #33333314;
  border-radius: 5px;
  padding: 14px;
}</style>