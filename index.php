<?php
?>
<!doctype html>
<html lang="en">
	<head>
		<?php include 'imports/head.html';?>
	</head>
	<body>
		<header id="header" class="header">
			<?php include 'imports/header.html';?>
		</header>
		<section id="hero">
			<div class="banner-wrapper">
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h2>
			</div>
		</section>
		<section id="carousel"></section>
		<section id="services">
			<div class="section-wrapper">
				<h2>How We Can Help</h2>
				<ul>
					<li>
						<div class="li-left">
							<img alt="bullet point" src="img/service-01.svg">
						</div>
						<div class="li-right">
							<h3>Audits</h3>
							<p>UX research and auditing will help you understand your user’s needs, goals, and pain points. We can help with competitive benchmarking, market segmentation, real data personas, accessibility, and service blueprinting with our report and presentation deliverables.</p>
						</div>
					</li>
					<li>
						<div class="li-left">
							<img alt="bullet point" src="img/service-06.svg">
						</div>
						<div class="li-right">
							<h3>Design & Development</h3>
							<p>We take an iterative approach to group sketching, wireframes, user interface design, and storyboarding. We build on these designs to deliver style guides, design systems, web designs, and even front-end development.</p>
						</div>
					</li>
					<li>
						<div class="li-left">
							<img alt="bullet point" src="img/service-04.svg">
						</div>
						<div class="li-right">
							<h3>Qualitative Research</h3>
							<p>You can observe users interacting with your apps, websites, and prototypes. We can design studies, facilitate sessions, and deliver insights with recommendations for improvement through user journeys, surveys, focus groups, and empathy mapping.</p>
						</div>
					</li>
					<li>
						<div class="li-left">
							<img alt="bullet point" src="img/service-05.svg">
						</div>
						<div class="li-right">
							<h3>Quantitative Research</h3>
							<p>We can discover, interpret, and communicate meaningful patterns in your user traffic or usage data. By examining user flows and heat maps, or conducting analytics installation or audits, we can visualize your user data into a format that you understand, act upon, and improve.</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section id="footer">
			<?php include 'imports/footer.html';?>
		</section>
		<section id="quote">
			<div class="section-wrapper">
				<span class="message"></span>
			</div>
		</section>
		<script type="text/javascript">
			$(function() {
			  $('.nav-home').addClass('selected');
			});
		</script>
	</body>
</html>