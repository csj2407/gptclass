document.addEventListener("DOMContentLoaded", () => {
    const blogPosts = [
        {
            title: "산을 탐험하기",
            content: "여기에 예시 텍스트가 들어갑니다. 산을 탐험하면서 느낀 점과 경험을 공유합니다.",
            date: "2024년 7월 15일"
        },
        {
            title: "해변에서의 하루",
            content: "해변에서 보낸 하루에 대한 이야기입니다. 해변에서 즐길 수 있는 다양한 활동들을 소개합니다.",
            date: "2024년 6월 10일"
        },
        {
            title: "도시 모험",
            content: "도시에서의 다양한 모험과 경험을 다룹니다. 맛집 탐방, 관광지 방문 등 흥미로운 내용을 담고 있습니다.",
            date: "2024년 5월 22일"
        }
    ];

    const blogPostsContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "blog-post";

        const postTitle = document.createElement("h2");
        postTitle.textContent = post.title;

        const postDate = document.createElement("p");
        postDate.textContent = post.date;
        postDate.className = "post-date";

        const postContent = document.createElement("p");
        postContent.textContent = post.content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postDate);
        postElement.appendChild(postContent);

        blogPostsContainer.appendChild(postElement);
    });

    // 이미지 슬라이드 기능
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); // 3초마다 슬라이드 변경
    }

    showSlides();
});
