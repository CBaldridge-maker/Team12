if (-Not (Test-Path downloaded)) {
    New-Item downloaded -ItemType Directory | Out-Null
}
Add-Type -AssemblyName System.Drawing
function New-Png($path, $br, $fg, $text) {
    $bmp = New-Object System.Drawing.Bitmap 240,240
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear($br)
    $font = New-Object System.Drawing.Font('Arial',24,[System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush($fg)
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0,0,240,240)
    $g.DrawString($text, $font, $brush, $rect, $sf)
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}
New-Png 'downloaded\whiskers.png' ([System.Drawing.Color]::FromArgb(15,23,42)) ([System.Drawing.Color]::FromArgb(14,165,233)) 'WH'
New-Png 'downloaded\salem.png' ([System.Drawing.Color]::FromArgb(4,12,26)) ([System.Drawing.Color]::FromArgb(147,51,234)) 'SA'
New-Png 'downloaded\luna.png' ([System.Drawing.Color]::FromArgb(15,23,42)) ([System.Drawing.Color]::FromArgb(34,197,94)) 'LU'
New-Png 'downloaded\paws.png' ([System.Drawing.Color]::FromArgb(15,23,42)) ([System.Drawing.Color]::FromArgb(249,115,22)) 'PA'
