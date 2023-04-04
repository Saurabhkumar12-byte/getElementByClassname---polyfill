// let arr=[];
// function getByClassName(root, className) {

//          if (root.classList.contains(className)) {
//             arr.push(root)
//          }
//          if (root.children.length >0) {
//             for (const child of root.children) {
//                getByClassName(child,className)
//             }
//          } else {
//             return;
//          }
//          return arr;

// }
var arr=[];
function getByClassNameHierarchy(root, target,arr) {
  let parent = target[0];
  let child = target[2];
  if (root.children.length<=0) {
   return;
  }
  
   if (root.classList.contains(parent)) {
      
         Array.from(root.children).forEach((e)=>{
            if (e.classList.contains(child)) {
               arr.push(e);
               
            }
            getByClassNameHierarchy(e,target ,arr);
         })
     
      
  }
  else{
   Array.from(root.children).forEach((e)=>{
     
      getByClassNameHierarchy(e,target,arr);
   })
  }
  return arr;
}
const getIds = (elements = []) => Array.from(elements).map((x) => x.id);
const root = document.getElementById("a-1");
console.log("actual: ", getIds(getByClassNameHierarchy(root, "b>a",arr)));
console.log("expected: ", `['b-1']`);
