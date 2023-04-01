let arr=[];
function getByClassName(root, className) {
    
   
         if (root.classList.contains(className)) {
            arr.push(root)
         }
         if (root.children.length >0) {
            for (const child of root.children) {
               getByClassName(child,className)
            }
         } else {
            return;
         }
         return arr;
     
   
}
const getIds = (elements = []) => Array.from(elements).map((x) => x.id);
const root = document.getElementById("root");
console.log("actual: ", getIds(getByClassName(root, "a")));
console.log("expected: ", `['root','a-2','a-3']`);
