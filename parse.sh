#!/bin/bash

horizon_base_url="https://horizon.celestus.fr/CelestusV2/RC/Uni2/"

declare -A factions
factions["IcoF0.png"]="P"
factions["IcoF1.png"]="RCA"
factions["IcoF2.png"]="D"
factions["IcoF3.png"]="Z"
factions["IcoF4.png"]="A"
factions["IcoF5.png"]="L"
factions["IcoF6.png"]="M"
factions["IcoF7.png"]="T"
factions["IcoF8.png"]="C"

for _file in new_reports/*.htm*; do

    printf "%s\n" "Parsing $_file"

    declare -a attackers=()
    declare -a defenders=()
    name_operation=""
    report_id=${_file##*/}
    report_id=${report_id%%.*}
    coordinates=""
    date_TSU=""
    date_IRL=""
    attacker_faction_ico=""
    defender_faction_ico=""
    attacker_faction=""
    defender_faction=""
    attacker_victorious=false

    while IFS= read -r _line; do

        # Get attackers pseudo
        if [[ "$_line" =~ ^Rounds\[0\]\[\"A\"\].*Pseudo.*=.* ]]; then
            attacker="${_line##*=}"
            attacker="${attacker:1:-2}"
            attackers+=("$attacker")
        
        # Get defenders pseudo
        elif [[ "$_line" =~ ^Rounds\[0\]\[\"D\"\].*Pseudo.*=.* ]]; then
            defender="${_line##*=}"
            defender="${defender:1:-2}"
            defenders+=("$defender")

        # Name of the attacking fleet
        elif [[ "$_line" =~ ^NomOP=(.*)$ ]]; then
            name_operation=${BASH_REMATCH[1]}
            name_operation=${name_operation:1:-2}

        # Coordinates of the fight
        elif [[ "$_line" =~ Rounds\[0\]\[\"Debut\"\]=.*\(([0-9]{1,3}:[0-9]{1,3}:[0-9]{1,3}:[0-9]{1,3})\).* ]]; then
            coordinates=${BASH_REMATCH[1]}

        # Date of the fight
        elif [[ "$_line" =~ .*Date[[:space:]]:(.*[0-9]{2}\)) ]]; then
            _date=${BASH_REMATCH[1]}
            date_irl=${_date##*TSU}
            date_irl=${date_irl//(/}
            date_irl=${date_irl//)/}
            date_irl=${date_irl/ /}
            date_tsu=${_date%%TSU*}

        # Factions
        elif [[ "$_line" =~  .*(SkinRC/Factions/IcoF[0-9]\.png).*(SkinRC/Factions/IcoF[0-9]\.png) ]]; then
            attacker_faction=${BASH_REMATCH[1]}
            defender_faction=${BASH_REMATCH[2]}
            attacker_faction=${attacker_faction##*/}
            defender_faction=${defender_faction##*/}

            attacker_faction_ico=${attacker_faction}
            defender_faction_ico=${defender_faction}

            attacker_faction=${factions[$attacker_faction]}
            defender_faction=${factions[$defender_faction]}

        # Attacker victorious ?
        elif [[ "$_line" =~ .*Rounds\[[0-9]{1,2}\]\[\"Str_A\"\]=\"1\" ]]; then
            attacker_victorious=true
        fi

    done < "$_file"

    # Convert data to JS object and append to array
    object=$(cat <<EOD
{
    "onlineLink": "$horizon_base_url$report_id.htm",
    "localLink": "$report_id",
    "title":"$name_operation",
    "attackers": [$(printf '"%s",' "${attackers[@]}")],
    "defenders": [$(printf '"%s",' "${defenders[@]}")],
    "coordinates": "$coordinates",
    "position": L.latLng([0,0]),
    "facAttackers": factions.$attacker_faction,
    "facDefenders": factions.$defender_faction,
    get facAttackersImg() {
        return "img" + "/$attacker_faction_ico"
    },
    get facDefendersImg() {
        return "img" + "/$defender_faction_ico"
    },
    "marker": undefined,
    "details": undefined,
    "dateTSU": "$date_tsu",
    "dateIRL": "$date_irl",
    "win": $attacker_victorious
}
EOD
)

    printf '\nreports.push(%s)\n' "$object" >> reports.js
    mv $_file reports/
done


