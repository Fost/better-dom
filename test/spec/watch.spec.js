describe("watch", function() {
    "use strict";
    
    var WAIT_FOR_WATCH_TIME = 50,
        callback;

    beforeEach(function() {
        callback = jasmine.createSpy("callback");
    });

    it("should execute callback for every existed element on page", function() {
        setFixtures("<a class='watch'></a><span class='watch'></span><b class='watch'></b>");

        DOM.watch(".watch", callback);

        waits(WAIT_FOR_WATCH_TIME);

        runs(function() {
            expect(callback.callCount).toBe(3);
        });
    });

    it("should execute for each matched future element on page", function() {
        DOM.watch(".watch1", callback);

        waits(WAIT_FOR_WATCH_TIME);

        runs(function() {
            expect(callback).not.toHaveBeenCalled();

            setFixtures("<a class='watch1'></a><span class='watch1'></span>");
        });

        waits(WAIT_FOR_WATCH_TIME);

        runs(function() {
            expect(callback.callCount).toBe(2);
        });
    });

    it("should have DOM element as the first argument", function() {
        setFixtures("<a class='watch2'></a><span class='watch2'></span>");

        DOM.watch(".watch2", callback.andCallFake(function(el) {
            expect(el).toBeDefined();
            expect(el._node).toBeTruthy();
        }));

        waits(WAIT_FOR_WATCH_TIME);

        runs(function() {
            expect(callback.callCount).toBe(2);
        });
    });

    it("should accept several watchers of the same selector", function() {
        setFixtures("<a class='watch4'></a><b class='watch4'></b>");

        DOM.watch(".watch4", callback);
        DOM.watch(".watch4", callback);

        waits(WAIT_FOR_WATCH_TIME);

        runs(function() {
            expect(callback.callCount).toBe(4);
        });
    });

    it("should not stop handle other listeners if any throws an error", function() {
        var otherCallback = jasmine.createSpy("otherCallback");

        callback.andCallFake(function() {
            throw "watch";
        });

        DOM.watch(".watch5", callback);
        DOM.watch(".watch5", otherCallback);

        setFixtures("<a class='watch5'></a>");

        waits(WAIT_FOR_WATCH_TIME);

        runs(function() {
            expect(callback).toHaveBeenCalled();
            expect(otherCallback).toHaveBeenCalled();
        });
    });

});