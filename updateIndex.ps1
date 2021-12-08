$content = '';

Get-ChildItem "./src" |
Where {$_.Name -match "^[^.]*\.jsx?$"} |
Foreach-Object {
    if ($content -ne '')
    {
      $content += "`n";
    }
    $content += "export { default as $($_.BaseName) } from './src/$($_.BaseName)';";
}

Set-Content -Path index.js -Value $content