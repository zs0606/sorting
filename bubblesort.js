function bubbleSort(arr){
  let swap = 0;
  let temp;

  for (let i = 0; i< arr.length - 1; i++){

    if (arr[i] > arr[i+1]){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      swap++;
    }
  }
  if (swap){
    return bubbleSort(arr);
  } else {
    return arr;
  }
}

bubbleSort([6,3,5,4,7]);
