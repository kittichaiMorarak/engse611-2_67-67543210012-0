document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("กรุณากรอกข้อความก่อนเพิ่มรายการ!");
            return;
        }

       
        const li = document.createElement("li");
        li.classList.add("task-item");

        
        const img = document.createElement("img");
        img.src = "https://via.placeholder.com/20"; 
        img.alt = "Task Icon";
        img.classList.add("task-icon");

        
        const span = document.createElement("span");
        span.textContent = taskText;
        span.classList.add("task-text");

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "ลบ";
        deleteButton.classList.add("delete-btn");

        
        span.addEventListener("click", function () {
            span.classList.toggle("completed");
        });

        
        deleteButton.addEventListener("click", function () {
            if (confirm("ต้องการลบรายการนี้ใช่หรือไม่?")) {
                taskList.removeChild(li);
            }
        });


        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

  
        taskInput.value = "";
    });
});
