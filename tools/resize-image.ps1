# Shrinks a screenshot for the blog: 1600 px wide JPEG, quality 84.
# Usage: powershell -File tools\resize-image.ps1 -In <png> -Out src\blog\images\name.jpg
param([Parameter(Mandatory)][string]$In, [Parameter(Mandatory)][string]$Out, [int]$Width = 1600)
Add-Type -AssemblyName System.Drawing
$jpg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]84)
$img = [System.Drawing.Image]::FromFile((Resolve-Path $In))
$w = [Math]::Min($Width, $img.Width); $h = [int]($w * $img.Height / $img.Width)
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = 'HighQualityBicubic'; $g.PixelOffsetMode = 'HighQuality'
$g.DrawImage($img, 0, 0, $w, $h)
$bmp.Save([IO.Path]::GetFullPath($Out), $jpg, $ep)
$g.Dispose(); $bmp.Dispose(); $img.Dispose()
"$Out ${w}x$h"
