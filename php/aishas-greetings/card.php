<?php

require_once '_header.php';
require_once '_utilities.php';

$file_name = sanitizeFileName($_GET['name']);
if (file_exists("cards/$file_name")) {
  $card_content = file_get_contents("cards/$file_name");
}

?>

<h1 class="my-4">Card Preview</h1>
<?php if (isset($card_content)): ?>
  <pre class="bg-light p-3"><?= htmlspecialchars($card_content) ?></pre>
<?php else: ?>
  <pre class="bg-light p-3">Oops! Something went wrong</pre>
<?php endif; ?>

<?php

require_once '_footer.php';
