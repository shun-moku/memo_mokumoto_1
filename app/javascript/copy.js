const copybtns = document.getElementsByClassName('copybtn'); // コピーするボタンのクラス名

const clipCopy = () =>{  
  if( copybtns.length > 0 ){
    for(let i = 0; i < copybtns.length ; i++){
      copybtns[i].addEventListener('click', ()=>{
        const copytextarea = document.createElement("textarea");
        const id = copybtns[i].getAttribute('data-copy');
        const copyarea = document.getElementById(id);
        const copytext = copyarea.textContent; 
        copytextarea.textContent = copytext;
        document.body.appendChild(copytextarea);
        copytextarea.select();
        const results = document.execCommand('copy');
        document.body.removeChild(copytextarea);
        if( results ){
          alert('クリップボードにコピーしました。');
        }else{
          alert("コピーに失敗しました。")
        }
      });
    }    
  }
}

window.addEventListener('load', clipCopy)
// clipCopy();