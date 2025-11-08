while IFS= read -r _line; do
    _report_id=${_line##*/}
    _report_id=${_report_id%%.*}
    curl "$_line" -o "new_reports/$_report_id.htm"
    printf "\n" >> "new_reports/$_report_id.htm"
done < reports.txt
