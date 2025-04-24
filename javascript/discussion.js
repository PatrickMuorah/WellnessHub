document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const nameInput = document.getElementById("name");
    const categorySelect = document.getElementById("category");
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
  
    postForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = nameInput.value.trim();
      const category = categorySelect.value;
      const title = titleInput.value.trim();
      const content = contentInput.value.trim();
  
      if (!name || !category || !title || !content) {
        alert("Please fill out all fields.");
        return;
      }
  
      const threadId = category.toLowerCase() + "Thread";
      const threadContainer = document.getElementById(threadId);
  
      const newPost = document.createElement("div");
      newPost.className = "post";
      newPost.innerHTML = `
        <strong>${name}</strong> - <em>${category}</em><br />
        <strong>${title}</strong>
        <p>${content}</p>
        <button class="reply-btn">Reply</button>
        <div class="reply-form hidden">
          <input type="text" placeholder="Your name" class="reply-name">
          <textarea rows="2" placeholder="Your reply..." class="reply-text"></textarea>
          <button class="submit-reply">Post Reply</button>
        </div>
        <div class="replies"></div>
      `;
  
      threadContainer.appendChild(newPost);
      postForm.reset();
    });
  
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("reply-btn")) {
        const post = e.target.closest(".post");
        const form = post.querySelector(".reply-form");
        form.classList.toggle("hidden");
      }
    });
  
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("submit-reply")) {
        const post = e.target.closest(".post");
        const nameInput = post.querySelector(".reply-name");
        const textInput = post.querySelector(".reply-text");
        const repliesContainer = post.querySelector(".replies");
  
        const name = nameInput.value.trim();
        const text = textInput.value.trim();
  
        if (!name || !text) {
          alert("Please fill out both fields.");
          return;
        }
  
        const reply = document.createElement("div");
        reply.className = "reply";
        reply.innerHTML = `<strong>${name}</strong>: <p>${text}</p>`;
        repliesContainer.appendChild(reply);
  
        nameInput.value = "";
        textInput.value = "";
        post.querySelector(".reply-form").classList.add("hidden");
      }
    });
  });
  