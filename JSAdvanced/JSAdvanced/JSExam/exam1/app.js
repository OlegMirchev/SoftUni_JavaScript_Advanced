function solve() {
    let postTittleElement = document.getElementById('post-title');
    let postCategoryElement = document.getElementById('post-category');
    let postContentElement = document.getElementById('post-content');
    let buttonPublishBtnElement = document.getElementById('publish-btn');
    let buttonClearBtnElement = document.getElementById('clear-btn');
  
    let reviueListElement = document.getElementById('review-list');
    let publishListElement = document.getElementById('published-list');
  
    buttonPublishBtnElement.addEventListener('click', onPublish);
    buttonClearBtnElement.addEventListener('click', onClear);
  
  
    function onPublish(e) {
      e.preventDefault();
  
      let title = postTittleElement.value;
      let category = postCategoryElement.value;
      let content = postContentElement.value;
  
      if (!postTittleElement.value || !postCategoryElement.value || !postContentElement.value) {
        return;
      }
  
      let li = document.createElement('li');
      li.className = 'rpost';
      li.innerHTML = `<article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
      </article>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn approve">Approve</button>`;
      // let article = document.createElement('article');
      // let h4 = document.createElement('h4', postTittleElement.value);
      // let pCategory = document.createElement('p', `Category: ${postCategoryElement.value}`);
      // let pContent = document.createElement('p', `Content: ${postContentElement.value}`);
      // let editBtn = document.createElement('button', 'Edit', 'action-btn edit');
      // let approveBtn = document.createElement('button', 'Approve', 'action-btn approve');
      let editBtn = li.querySelector('.edit');
      let approveBtn = li.querySelector('.approve');
      editBtn.addEventListener('click', onEdit);
      approveBtn.addEventListener('click', onApprove);
  
      reviueListElement.appendChild(li);
      // li.appendChild(article);
      // li.appendChild(editBtn);
      // li.appendChild(approveBtn);
      // article.appendChild(h4);
      // article.appendChild(pCategory);
      // article.appendChild(pContent);
  
      // editBtn.addEventListener('click', onEdit);
      // approveBtn.addEventListener('click', onApprove);
  
      postTittleElement.value = '';
      postCategoryElement.value = '';
      postContentElement.value = '';
  
      function onEdit(e) {
        postTittleElement.value = title;
        postCategoryElement.value = category;
        postContentElement.value = content;
  
        li.remove();
      }
  
      function onApprove(e) {
        publishListElement.appendChild(li);
  
        editBtn.remove();
        approveBtn.remove();
      }
    }
  
    function onClear() {
      publishListElement.innerHTML = '';
    }
  }