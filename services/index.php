<?php
?>
<!doctype html>
<html lang="en">
	<head>
		<?php include '../imports/head.html';?>
	</head>
	<body>
		<header id="header" class="header">
			<?php include '../imports/header.html';?>
		</header>
				<section id="hero">
			<div class="banner-wrapper">
				<h2>Services</h2>
			</div>
		</section>
		<section id="nonprofits">
			<div class="section-wrapper2">
				<p class="center">Our client intake process starts with a simple conversation to understand your business and customer goals. From there, we’ll provide a proposal for your review. After that, we’ll start creating goodness for your business and customers!</p>
				<div class="svcontainer">
					<div class="svc-left">
						<ul class="svc-ul">
							<li class="audit">
								<img alt="bullet point" src="../img/service-01.svg">
								<h3>Audits</h3>
								<p>Learn more about your product or service with an expert review.</p>
							</li>
							<li class="audit">
								<img alt="bullet point" src="../img/service-04.svg">
								<h3>Customer Research</h3>
								<p>Discover what your customers really think about your product or service.</p>
							</li>
							<li class="audit">
								<img alt="bullet point" src="../img/service-05.svg">
								<h3>Quantitative Research</h3>
								<p>Find out how data can help you understand your customers.</p>
							</li>
							<li class="audit">
								<img alt="bullet point" src="../img/service-06.svg">
								<h3>User Interface Design</h3>
								<p>Build delightful experiences for your customers.</p>
							</li>
						</ul>
					</div>
					<div class="svc-right">
						<div class="audit-text">
							<h4>Analytics Audit</h4>
							<p>An analytics audit can help determine if your analytics setup is really tracking the information you need about your customers. We’ll help you discover any additional data points you should be collecting.</p>
							<h4>Web Accessibility Audit</h4>
							<p>A web accessibility audit looks at how your website perform through the lens of people with disabilities. Although web accessibility focuses on people with disabilities (such as visual, auditory, physical, speech, cognitive, and neurological) it also benefits our senior-aged population that undergoes changing abilities over time. We’ll ensure your website is compliant with modern web accessibility standards.</p>
							<h4>Competitive Benchmarking Audit</h4>
							<p>How does your product or service compare to your peers in a competitive market? A benchmarking audit determines industry trends among your competitors and can help to inform further research.</p>
							<h4>Content Audit</h4>
							<p>If you’re considering doing a redesign project, a content audit should be the first step in the process. A content audit gives you a comprehensive view of everything on your site to help make sure your brand story in an organized and compelling way.</p>
							<h4>Usability Audit</h4>
							<p>A usability audit is a great first step to uncover areas in your product or service where customers may be having difficulties. Our expert UX practitioners have years of experience researching customer-technology interactions to pinpoint areas of improvement regarding ease-of-use.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="footer">
			<?php include '../imports/footer.html';?>
		</section>
		<section id="quote">
			<div class="section-wrapper">
				<span class="message"></span>
			</div>
		</section>
		<script type="text/javascript">
			$(function() {
			  $('.nav-services').addClass('selected');
			});
		</script>
	</body>
</html>