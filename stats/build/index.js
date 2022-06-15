"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalyzis_1 = require("./analyzers/WinsAnalyzis");
const Summary_1 = require("./Summary");
const HtmlReports_1 = require("./reportTargets/HtmlReports");
// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalyzis_1.WinsAnalyzis("Man United"), new HtmlReports_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
