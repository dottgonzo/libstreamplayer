"use strict";
var express = require("express");
var superagent = require("superagent");
var chai_1 = require("chai");
var index_1 = require("../index");
var port = 3500;
var baseurl = 'http://localhost:' + port + '/';
var baseplayer = {
    channel: 'test0',
    hostname: 'streamer.kernel.online'
};
before(function (done) {
    var app = express();
    app.use('/', index_1.htmlpage);
    app.listen(port, function () {
        console.log('Example app listening on port ' + port + '!');
    });
    done();
});
describe("test player", function () {
    it("return no channel if no channel", function (done) {
        superagent
            .get(baseurl)
            .query({})
            .end(function (err, res) {
            if (err) {
                done(err);
            }
            else {
                chai_1.expect(res.body.error).to.eql("no channel provided");
                done();
            }
        });
    });
    it("return no host if no host", function (done) {
        superagent
            .get(baseurl)
            .query({ channel: "dd" })
            .end(function (err, res) {
            if (err) {
                done(err);
            }
            else {
                chai_1.expect(res.body.error).to.eql("no host provided");
                done();
            }
        });
    });
    it("test basic player", function (done) {
        superagent
            .get(baseurl)
            .query(baseplayer)
            .end(function (err, res) {
            if (err) {
                done(err);
            }
            else {
                chai_1.expect(res.body.error).to.not.be.ok;
                chai_1.expect(res.text.split("StrobeMediaPlayback"[1])).to.be.ok;
                done();
            }
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQWtDO0FBRWxDLHVDQUF3QztBQUd4Qyw2QkFBNkI7QUFHN0Isa0NBQW1DO0FBRW5DLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQTtBQUVqQixJQUFNLE9BQU8sR0FBRyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFBO0FBR2hELElBQU0sVUFBVSxHQUFHO0lBQ2pCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFFBQVEsRUFBRSx3QkFBd0I7Q0FDbkMsQ0FBQTtBQUlELE1BQU0sQ0FBQyxVQUFVLElBQUk7SUFHbkIsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsZ0JBQVEsQ0FBQyxDQUFDO0lBR3ZCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFHSCxJQUFJLEVBQUUsQ0FBQTtBQUNSLENBQUMsQ0FBQyxDQUFBO0FBSUYsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUV0QixFQUFFLENBQUMsaUNBQWlDLEVBQUUsVUFBVSxJQUFJO1FBRWxELFVBQVU7YUFDUCxHQUFHLENBQUMsT0FBTyxDQUFDO2FBQ1osS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUNULEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHO1lBRXJCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ1gsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVOLGFBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtnQkFDcEQsSUFBSSxFQUFFLENBQUE7WUFDUixDQUFDO1FBR0gsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQTtJQUdGLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxVQUFVLElBQUk7UUFFNUMsVUFBVTthQUNQLEdBQUcsQ0FBQyxPQUFPLENBQUM7YUFDWixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUc7WUFFckIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDWCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRU4sYUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2dCQUNqRCxJQUFJLEVBQUUsQ0FBQTtZQUNSLENBQUM7UUFHSCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFBO0lBSUYsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsSUFBSTtRQUVwQyxVQUFVO2FBQ1AsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUNaLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDakIsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUc7WUFFckIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDWCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRU4sYUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFBO2dCQUVuQyxhQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFBO2dCQUV6RCxJQUFJLEVBQUUsQ0FBQTtZQUNSLENBQUM7UUFHSCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFBO0FBR0osQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoidGVzdC9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXG5cbmltcG9ydCAqIGFzIHN1cGVyYWdlbnQgZnJvbSBcInN1cGVyYWdlbnRcIlxuXG5cbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gXCJjaGFpXCJcblxuXG5pbXBvcnQgeyBodG1scGFnZSB9IGZyb20gXCIuLi9pbmRleFwiXG5cbmNvbnN0IHBvcnQgPSAzNTAwXG5cbmNvbnN0IGJhc2V1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDonICsgcG9ydCArICcvJ1xuXG5cbmNvbnN0IGJhc2VwbGF5ZXIgPSB7XG4gIGNoYW5uZWw6ICd0ZXN0MCcsXG4gIGhvc3RuYW1lOiAnc3RyZWFtZXIua2VybmVsLm9ubGluZSdcbn1cblxuXG5cbmJlZm9yZShmdW5jdGlvbiAoZG9uZSkge1xuXG5cbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4gIGFwcC51c2UoJy8nLCBodG1scGFnZSk7XG5cblxuICBhcHAubGlzdGVuKHBvcnQsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnRXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQgJyArIHBvcnQgKyAnIScpO1xuICB9KTtcblxuXG4gIGRvbmUoKVxufSlcblxuXG5cbmRlc2NyaWJlKFwidGVzdCBwbGF5ZXJcIiwgZnVuY3Rpb24gKCkge1xuXG4gIGl0KFwicmV0dXJuIG5vIGNoYW5uZWwgaWYgbm8gY2hhbm5lbFwiLCBmdW5jdGlvbiAoZG9uZSkge1xuXG4gICAgc3VwZXJhZ2VudFxuICAgICAgLmdldChiYXNldXJsKVxuICAgICAgLnF1ZXJ5KHt9KSAvLyBxdWVyeSBzdHJpbmdcbiAgICAgIC5lbmQoZnVuY3Rpb24gKGVyciwgcmVzKSB7XG5cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGRvbmUoZXJyKVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgZXhwZWN0KHJlcy5ib2R5LmVycm9yKS50by5lcWwoXCJubyBjaGFubmVsIHByb3ZpZGVkXCIpXG4gICAgICAgICAgZG9uZSgpXG4gICAgICAgIH1cblxuXG4gICAgICB9KTtcblxuICB9KVxuXG5cbiAgaXQoXCJyZXR1cm4gbm8gaG9zdCBpZiBubyBob3N0XCIsIGZ1bmN0aW9uIChkb25lKSB7XG5cbiAgICBzdXBlcmFnZW50XG4gICAgICAuZ2V0KGJhc2V1cmwpXG4gICAgICAucXVlcnkoeyBjaGFubmVsOiBcImRkXCIgfSkgLy8gcXVlcnkgc3RyaW5nXG4gICAgICAuZW5kKGZ1bmN0aW9uIChlcnIsIHJlcykge1xuXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBkb25lKGVycilcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGV4cGVjdChyZXMuYm9keS5lcnJvcikudG8uZXFsKFwibm8gaG9zdCBwcm92aWRlZFwiKVxuICAgICAgICAgIGRvbmUoKVxuICAgICAgICB9XG5cblxuICAgICAgfSk7XG5cbiAgfSlcblxuXG5cbiAgaXQoXCJ0ZXN0IGJhc2ljIHBsYXllclwiLCBmdW5jdGlvbiAoZG9uZSkge1xuXG4gICAgc3VwZXJhZ2VudFxuICAgICAgLmdldChiYXNldXJsKVxuICAgICAgLnF1ZXJ5KGJhc2VwbGF5ZXIpIC8vIHF1ZXJ5IHN0cmluZ1xuICAgICAgLmVuZChmdW5jdGlvbiAoZXJyLCByZXMpIHtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZG9uZShlcnIpXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBleHBlY3QocmVzLmJvZHkuZXJyb3IpLnRvLm5vdC5iZS5va1xuXG4gICAgICAgICAgZXhwZWN0KHJlcy50ZXh0LnNwbGl0KFwiU3Ryb2JlTWVkaWFQbGF5YmFja1wiWzFdKSkudG8uYmUub2tcblxuICAgICAgICAgIGRvbmUoKVxuICAgICAgICB9XG5cblxuICAgICAgfSk7XG5cbiAgfSlcblxuXG59KSJdfQ==