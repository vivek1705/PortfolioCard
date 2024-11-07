document.addEventListener("DOMContentLoaded", () => {
    // Set text content for static details
    document.getElementById("name").textContent = portfolioData.name;
    document.getElementById("address").textContent = portfolioData.address;
    document.getElementById("phone").textContent = portfolioData.phone;
    document.getElementById("email").textContent = portfolioData.email;
  
    // Set profile picture and background image
    document.querySelector(".profile-photo").src = portfolioData.profilePicture;
      
    // Set QR code and portfolio link
    document.getElementById("qr-code").src = portfolioData.qrCodeImage;
    document.getElementById("portfolio-link").href = portfolioData.portfolioLink;
    document.getElementById("portfolio-link").textContent = "See My Portfolio";

    // Typewriter effect for roles
    let roleIndex = 0;
    let charIndex = 0;
    const typewriterElement = document.getElementById("typewriter");
  
    function typeWriterEffect() {
      if (charIndex < portfolioData.roles[roleIndex].length) {
        typewriterElement.innerHTML += portfolioData.roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriterEffect, 100);
      } else {
        setTimeout(eraseEffect, 2000);
      }
    }
  
    function eraseEffect() {
      if (charIndex > 0) {
        typewriterElement.innerHTML = portfolioData.roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
      } else {
        roleIndex = (roleIndex + 1) % portfolioData.roles.length;
        setTimeout(typeWriterEffect, 500);
      }
    }
  
    typeWriterEffect();
  
    // Social Media Icons
    const socialMediaContainer = document.getElementById("social-media");
    for (const [platform, url] of Object.entries(portfolioData.socialLinks)) {
      const icon = document.createElement("a");
      icon.href = url;
      icon.target = "_blank";
      icon.innerHTML = `<i class="bi bi-${platform}"></i>`;
      socialMediaContainer.appendChild(icon);
    }
  });
  