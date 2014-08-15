

describe('numbers', function(){
  "use strict";

  it('recognises 200 as 2:00', function(){
    var d = parseTime('200');
    expect(moment.isMoment(d)).toBe(true);
    expect(d.hours()).toBe(2);
    expect(d.minutes()).toBe(0);
  });

  it('recognises 210 as 2:10', function(){
    var d = parseTime('210');
    expect(moment.isMoment(d)).toBe(true);
    expect(d.hours()).toBe(2);
    expect(d.minutes()).toBe(10);
  });

  it('280 is an invalid date', function(){
    var d = parseTime('280');
    expect(moment.isMoment(d)).toBe(true);
    expect(d.isValid()).toBe(false);
  });

  it('recognises 2330 as 11:30pm', function(){
    var d = parseTime('2330');
    expect(moment.isMoment(d)).toBe(true);
    expect(d.hours()).toBe(23);
    expect(d.minutes()).toBe(30);
    expect(d.format('h:mma')).toBe('11:30pm');
  });


});
