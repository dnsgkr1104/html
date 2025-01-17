document.addEventListener("DOMContentLoaded", function () {
    const introText = document.getElementById("intro");
    const navbar = document.getElementById("navbar");

    // 인트로 페이지 애니메이션
    setTimeout(function () {
        introText.classList.remove("hidden");
        introText.classList.add("show");
    }, 1000); // 1초 후에 애니메이션 시작

    // 페이지 스크롤 시 네비게이션 바 표시
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {  // 스크롤이 200px 이상 내려가면 네비게이션 바가 보이도록 설정
            navbar.classList.add("visible");
        } else {
            navbar.classList.remove("visible");
        }
    });

    // 프로젝트 페이지로 이동 (예시)
    window.navigateToProjectPage = function (projectId) {
        alert(`${projectId} 페이지로 이동합니다.`);
        // 실제 페이지로 이동하려면 window.location.href를 사용
        // 예: window.location.href = `/projects/${projectId}`;
    };

    // GitHub 바로가기
    window.goToGitHub = function () {
        window.location.href = 'https://github.com/your-profile'; // GitHub 주소
    };
});
