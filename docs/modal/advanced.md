```html
<Open openId='advancedModal'>
  <a className="button">Open Modal</a>
</Open>  
<Modal id='advancedModal' overlay={true} overlayClose={true}>
  <div className="grid-block vertical">
    <div className="shrink grid-content">
      <img src="http://fc07.deviantart.net/fs70/i/2012/014/b/e/snowy_peak_by_cassiopeiaart-d4mb6aq.jpg" />
    </div>
    <div className="grid-content button-group">
      <Close closeId='advancedModal'>
        <a className="button">Ok</a>
      </Close>
      <Close closeId='advancedModal'>
        <a className="button">Cancel</a>
      </Close>
    </div>
  </div>  
</Modal>
```        