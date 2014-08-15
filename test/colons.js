

describe('colons', function(){
  "use strict";

  it('recognises 12:00', function(){
    var d = parseTime('12:00');
    expect(moment.isMoment(d)).toBe(true);
    expect(d.hours()).toBe(12);
    expect(d.minutes()).toBe(0);
  });

  it('recognises 18:10', function(){
    var d = parseTime('18:10');
    expect(d.hours()).toBe(18);
    expect(d.format('h:mma')).toBe('6:10pm');
    expect(d.minutes()).toBe(10);
  });

  it('recognises 6:10am', function(){
    var d = parseTime('6:10am');
    expect(d.hours()).toBe(6);
    expect(d.format('h:mma')).toBe('6:10am');
    expect(d.minutes()).toBe(10);
  });

  it('recognises 6:10pm', function(){
    var d = parseTime('6:10pm');
    expect(d.hours()).toBe(18);
    expect(d.format('h:mma')).toBe('6:10pm');
    expect(d.minutes()).toBe(10);
  });

  it('recognises 6:10 pm with a space', function(){
    var d = parseTime('6:10 pm');
    expect(d.hours()).toBe(18);
    expect(d.format('h:mm a')).toBe('6:10 pm');
    expect(d.minutes()).toBe(10);
  });

});
