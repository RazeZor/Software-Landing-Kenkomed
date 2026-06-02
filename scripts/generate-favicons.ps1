Add-Type -AssemblyName System.Drawing

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$logoPath = Join-Path $root "public\images\LogoKenko.png"
$iconsDir = Join-Path $root "public\icons"
New-Item -ItemType Directory -Force -Path $iconsDir | Out-Null

$src = [System.Drawing.Image]::FromFile($logoPath)
$side = [Math]::Min($src.Width, $src.Height)
$crop = New-Object System.Drawing.Bitmap $side, $side
$cg = [System.Drawing.Graphics]::FromImage($crop)
$cg.DrawImage($src, 0, 0, (New-Object System.Drawing.Rectangle 0, 0, $side, $side), (New-Object System.Drawing.Rectangle (($src.Width - $side) / 2), (($src.Height - $side) / 2), $side, $side), [System.Drawing.GraphicsUnit]::Pixel)
$cg.Dispose()
$src.Dispose()

function Export-Size([int]$size, [string]$path) {
  $out = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($out)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($crop, 0, 0, $size, $size)
  $g.Dispose()
  $full = Join-Path $root $path
  $out.Save($full, [System.Drawing.Imaging.ImageFormat]::Png)
  $out.Dispose()
  Write-Host "OK $path"
}

Export-Size 32 "public\favicon-32.png"
Export-Size 48 "public\icons\favicon-48x48.png"
Export-Size 96 "public\icons\favicon-96x96.png"
Export-Size 192 "public\icons\favicon-192x192.png"
Export-Size 180 "public\icons\apple-touch-icon.png"

# favicon.ico (32x32) for browsers that request /favicon.ico
$icoPath = Join-Path $root "public\favicon.ico"
$icon32 = New-Object System.Drawing.Bitmap 32, 32
$ig = [System.Drawing.Graphics]::FromImage($icon32)
$ig.DrawImage([System.Drawing.Image]::FromFile((Join-Path $root "public\favicon-32.png")), 0, 0, 32, 32)
$ig.Dispose()
$stream = [System.IO.File]::Create($icoPath)
$icon32.Save($stream, [System.Drawing.Imaging.ImageFormat]::Icon)
$stream.Close()
$icon32.Dispose()
Write-Host "OK public\favicon.ico"

# OG 1200x630
$ogIn = Join-Path $root "public\images\og-kenkomed.png"
if (Test-Path $ogIn) {
  $og = [System.Drawing.Image]::FromFile($ogIn)
  if ($og.Width -ne 1200 -or $og.Height -ne 630) {
    $ogOut = New-Object System.Drawing.Bitmap 1200, 630
    $ogG = [System.Drawing.Graphics]::FromImage($ogOut)
    $ogG.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $ogG.DrawImage($og, 0, 0, 1200, 630)
    $ogG.Dispose()
    $og.Dispose()
    $ogOut.Save($ogIn, [System.Drawing.Imaging.ImageFormat]::Png)
    $ogOut.Dispose()
    Write-Host "OK og-kenkomed.png resized to 1200x630"
  } else {
    $og.Dispose()
    Write-Host "OG already 1200x630"
  }
}

$crop.Dispose()
