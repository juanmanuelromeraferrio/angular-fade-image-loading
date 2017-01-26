# Angular Fade Image Loading
======
> This is a directive for AngularJS to show a progressive image loading as Medium of Instagram does.

# Demo
[Live demo on CodePen](https://codepen.io/juanmanuelromera/pen/bgovEV)


# Usage
We injected the `ngFadeImgLoading` module and added the directive file to your `html` files.

### Angular
```js
  angular.module('app', [ 'ngFadeImgLoading' ]);
```

### HTML
Add `<script>` to your code:
```html
<script src="angular/angular.min.js"></script>
<script src="build/angular-fade-image-loading.min.js"></script>
```

Add a `fade-img-loading` element to your html:
```html
<div>
  <fade-img-loading blur="/image/small-image.jpg" image="/image/real-image.jpg" />
</div>
```

# Params

|Param      |Type   |Required |Default |Details |
|-----------|-------|---------|--------|--------|
|blur     	| url  	|Yes      |none    | A small version of the source image |
|image   	| url  	|Yes  	  |none    | The source image |
