function showAndHideContent (id){
    let service = document.getElementById(id);
    let arrow = service.querySelector(".service-2-arrow").querySelector("#service-arrow");
    let content = service.querySelector(".service-2-content");
    let contentComputedStyle = getComputedStyle(content);

    if (contentComputedStyle.display === "none") {

        content.style.display = "block";
        
        arrow.className = ".bi bi-chevron-down";

    } else if (contentComputedStyle.display != "none") {

        content.style.display = "none";

        arrow.className = ".bi bi-chevron-up";
    }    
}