/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables */

var disqus_config = function () {
  this.page.url = '<%= canonicalUrl %>' // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = '<%= postId %>' // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function () { // DON'T EDIT BELOW THIS LINE
  var d = document
  var s = d.createElement('script')
  s.src = 'LINK FOR A JS FILE GOES HERE'
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s)
})()
