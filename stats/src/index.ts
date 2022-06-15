import { MatchReader } from "./MatchReader"
import { CsvFileReader } from "./CsvFileReader"
import { ConsoleReport } from "./reportTargets/ConsoleReport"
import { WinsAnalyzis } from "./analyzers/WinsAnalyzis"
import { Summary } from "./Summary"
import { HtmlReport } from "./reportTargets/HtmlReports"

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader("football.csv")

// create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()


const summary = new Summary(new WinsAnalyzis("Man United"), new HtmlReport ())

summary.buildAndPrintReport(matchReader.matches)


