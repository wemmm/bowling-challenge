'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('has a score for the first ball', function(){
    expect(frame.getFirstScore()).toEqual(null);
  });

  it('has a score for the second ball', function() {
    expect(frame.getSecondScore()).toEqual(null);
  });

  it('can return a total of the two frames', function() {
    expect(frame.getTotalFrameScore()).toEqual(frame.getFirstScore() + frame.getSecondScore())
  });

  it('can adjust scores', function() {
    frame.addFirstScore(3);
    frame.addSecondScore(2);
    expect(frame.getTotalFrameScore()).toEqual(5);
  });

  it('has a maximum score of ten', function() {
    frame.addFirstScore(10);
    frame.addSecondScore(1);
    expect(frame.getTotalFrameScore()).toEqual(10);
  })

});
