<?php
	include 'header.php';
?>


<section>
	<div>
	
		<?php
			if (isset($_SESSION['u_id'])) {
				echo "you are logged in!";
			}
		?>	
	</div>
</section>


<?php
	include 'footer.php';
?>
