<template>
  <div class="col-md-7 col-lg-8 col-xl-9">
    <div class="doc-review review-listing">
      <ul class="comments-list">
        <li class="list-style-none">
          <div class="comment">
            <img class="avatar rounded-circle" alt="User Image"
              src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg">
            <div class="comment-body">
              <div class="meta-data">
                <span class="comment-author">Richard Wilson</span>
                <span class="comment-date">Reviewed 2 Days ago</span>
                <div class="review-count rating">
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
              <p class="recommended"><i class="far fa-thumbs-up"></i> I recommend the doctor</p>
              <p class="comment-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation.
                Curabitur non nulla sit amet nisl tempus
              </p>
              <div class="comment-reply">
                <a class="comment-btn" href="#">
                  <i class="fas fa-reply"></i> Reply
                </a>
                <p class="recommend-btn">
                  <span>Recommend?</span>
                  <a href="#" class="like-btn">
                    <i class="far fa-thumbs-up"></i> Yes
                  </a>
                  <a href="#" class="dislike-btn">
                    <i class="far fa-thumbs-down"></i> No
                  </a>
                </p>
              </div>
            </div>
          </div>

          <ul class="comments-reply">

            <li>
              <div class="comment">
                <img class="avatar rounded-circle" alt="User Image" src="assets/img/doctors/doctor-thumb-02.jpg">
                <div class="comment-body">
                  <div class="meta-data">
                    <span class="comment-author">Dr. Darren Elder</span>
                    <span class="comment-date">Reviewed 3 Days ago</span>
                  </div>
                  <p class="comment-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.
                    Curabitur non nulla sit amet nisl tempus
                  </p>
                  <div class="comment-reply">
                    <a class="comment-btn" href="#">
                      <i class="fas fa-reply"></i> Reply
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
</template>
  
<script>
export default {
  components: {

  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.avatar {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
}

.comment .comment-body .meta-data {
  position: relative;
  margin-bottom: 10px;
}

span.comment-author {
  font-weight: 600;
  color: #272b41;
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

.rating i.filled {
  color: #f4c150;
}
</style>
  