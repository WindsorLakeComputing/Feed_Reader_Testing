$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URLs are defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.name ).toBeTruthy();
            })
        });

        it('names are defined', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i]['name']).toBeDefined();
                expect(allFeeds[i]['name']).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {
        it('ensure menu hidden by default', function() {
            expect(document.getElementsByClassName("menu-hidden")[0]).toBeDefined();
        });

        it('menu changes visibility when icon clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect(document.getElementsByClassName("menu-hidden")[0]).toBeUndefined();
            $('.menu-icon-link').trigger('click');
            expect(document.getElementsByClassName("menu-hidden")[0]).toBeDefined();
        })
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('verify loadFeed', function() {
            let firstEntry = document.getElementsByClassName("entry-link")[0];
            expect(firstEntry.href.length).not.toBe(0)
        });
    })

    describe('New Feed Selection', function() {
        let frstOrigEntry;
        let frstSecEntry;

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        beforeEach(function(done) {
            frstOrigEntry = document.getElementsByClassName("entry-link")[0];
            loadFeed(3, function() {
                done();
            });
        });

        it('ensire new feed changes content of current', function(done) {
            frstSecEntry = document.getElementsByClassName("entry-link")[0];
            expect(frstSecEntry.href).not.toBe(frstOrigEntry.href)
            done();
        });
    })
}());