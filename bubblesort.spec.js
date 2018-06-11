describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });

  it('handles multiple items', function(){
    expect( bubbleSort([3,2]) ).toEqual( [2,3] );
    expect( bubbleSort([3,2,3]) ).toEqual( [2,3,3] );
    expect( bubbleSort([6,3,5,4,7,2,9,1,8]) ).toEqual( [1,2,3,4,5,6,7,8,9] );
  });
});
