
describe("tekpub", function(){

  it("it loads with the window", function(){
    expect(window.tekpub).toBeDefined();
  });

  it("has a customer", function(){
    expect(tekpub.customer).toBeDefined();
  });

  it("allows download of mvc3", function(){
    expect(tekpub.canDownload('mvc3')).toBeTruthy();
  });

  it("does not allow download of ZZZ", function(){
    expect(tekpub.canDownload('ZZZ')).toBeFalsy();
  });
  
});
