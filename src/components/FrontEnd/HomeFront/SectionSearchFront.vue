<template>
    <section class="section section-search">
        <div class="container-fluid">
            <div class="banner-wrapper">
                <div class="banner-header text-center">
                    <h1 class="font-weight-bold">Search Doctor, Make an Appointment</h1>
                    <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
                </div>
                <div class="search-box">
                    <form class="form-search" action="#">
                        <div class="input-group search-location mr-3">

                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </span>
                                <input type="text" class="form-control" placeholder="Search Location">
                            </div>

                            <span class="form-text">Based on your Location</span>
                        </div>
                        <div class="form-group search-info mr-3">
                            <input type="text" class="form-control"
                                placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc">
                            <span class="form-text">Ex : Dental or Sugar Check up etc</span>
                        </div>
                        <button type="submit" class="btn btn-primary search-btn mt-0">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.form-text {
    color: #333;
}

.search-btn {
    padding: 10px 15px;
    background: #4dd0ec;
    border: none;
    transition: 1s;
}

.search-btn:hover {
    background: #03a9f4;
}

.input-group-prepend .input-group-text,
.input-group-prepend .form-control {
    background: white;
    border: none;
}

.form-control {
    padding: 1.375rem 0.75rem;
}

.input-group-prepend,
.form-control {
    border-radius: 0;
    border: 1px solid #3333332e
}

.input-group {
    display: inline-flex !important;
}

.section-search {
    background: #f9f9f9 url(https://media.istockphoto.com/id/1318410710/photo/blur-abstract-background-from-office-modern-light-spacious-business-room.jpg?b=1&s=170667a&w=0&k=20&c=CAFK52emUoaVqCPi5mcMoeTMHdefGrZ6xfAhbLdSrhs=) no-repeat top center;
    min-height: 450px;
    background-size: 100% auto;
    position: relative;
    background-blend-mode: Darken;
    padding: 80px 0;
}

.banner-header p {
    color: #ffffff;
    font-size: 20px;
}

.form-search {
    justify-content: center;
    display: -webkit-inline-box;
}

.banner-wrapper {
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
}

.search-info {
    width: 475px;
}

.search-location {
    width: 215px;
}</style>