"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(data) {
  this.value = data;
  this.left= null;
  this.right = null;
}

BinarySearchTree.prototype.size = function() {
  if (this.value === null) return 0;

  if (this.left === null && this.right === null) return 1;

  if(this.left === null){
    return 1 + this.right.size();
  }

  if(this.right === null){
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.insert = function(data){

  if (data < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(data);
    }else{
      this.left.insert(data);
    }
  }else{
    if (this.right === null) {
      this.right = new BinarySearchTree(data);
    }else{
      this.right.insert(data);
    }
  }
}

BinarySearchTree.prototype.contains = function(data){

  if(this.value === data) return true;

  if(data < this.value && this.left !== null) {
    return this.left.contains(data);
  } else if (data > this.value && this.right !== null) {
    return this.right.contains(data);    
  } else{
    return false;
  }

}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  // in-order
  if (order ==='in-order' || !order){ // left - root - right
    if (this.left !== null) {
      this.left.depthFirstForEach(cb, order);
    }
    cb(this.value);
    if (this.right !== null) {
      this.right.depthFirstForEach(cb, order);
    }
  }else if (order === 'pre-order'){ // root - left - right
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right !== null) {
      this.right.depthFirstForEach(cb, order);
    }
  }else if (order === 'post-order'){ // left - right - root
    if (this.left !== null) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right !== null) {
      this.right.depthFirstForEach(cb, order);
    }
    cb(this.value);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function( cb, array){

  if(!array) {
    var array = []
  }

  cb(this.value);

  if (this.left !== null) {
    array.push(this.left);
  }
  
  if (this.right !== null) {
    array.push(this.right);
  }

  if(array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }

}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
