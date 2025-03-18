document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

       
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        
        if (name === "") {
            alert("กรุณากรอกชื่อ!");
            return;
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("กรุณากรอกอีเมลให้ถูกต้อง!");
            return;
        }

        
        const phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phone)) {
            alert("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (เฉพาะตัวเลข)!");
            return;
        }

        
        console.log("ชื่อ:", name);
        console.log("อีเมล:", email);
        console.log("เบอร์โทรศัพท์:", phone);
        console.log("หัวข้อ:", subject);
        console.log("ข้อความ:", message);

        alert("ส่งข้อมูลสำเร็จ!");
        form.reset(); 
    });
});
