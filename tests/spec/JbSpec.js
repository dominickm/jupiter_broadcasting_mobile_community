describe("JB", function(){
  it("Should load the feed upon first launch", function(){
    var theNumberOfChildren = $('#body').children().length
    expect(theNumberOfChildren).toBe(1);
  });

  it("Should set the header upon first launch", function() {
    var applicationName = $('#header > center > h1').text()
    expect(applicationName).toBe(jb.APP_NAME);
  });

  describe("The rss feed.", function(){
    it("Should not return an error", function() {
      jb.feed.get(jb.feed.OGG_FEED, function(results){
        expect(results.status.code).toBe(200);
      });
    });
    it("Should contain 10 results.", function(){
      jb.feed.get(jb.feed.OGG_FEED, function(results){
        expect(results.feed.entries.length).toBe(10);
      });
    });
  });
});