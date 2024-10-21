$buildTime = Measure-Command { npx docusaurus build }
$buildTimeString = "Tempo total de build: $($buildTime.Hours)h $($buildTime.Minutes)m $($buildTime.Seconds)s $($buildTime.Milliseconds)ms"
$buildTimeString | Out-File -FilePath "build_time_log.txt" -Append
