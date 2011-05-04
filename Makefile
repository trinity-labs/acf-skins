APP_NAME=skins
PACKAGE=acf-$(APP_NAME)
VERSION=0.4.0

WWW_DIST=\
	static/alpine.jpg\
	static/alpine_inv.jpg\
	static/asc.gif\
	static/bg.gif\
	static/desc.gif\
	static/reset.css\
	static/watermark.jpg\
	static/tango/16x16/categories/applications-internet.png \
	static/tango/16x16/categories/applications-system.png \
	static/tango/16x16/places/start-here.png \
	static/tango/16x16/places/network-server.png \
	static/tango/16x16/status/network*.png \
	static/tango/16x16/devices/computer.png \
	static/tango/16x16/devices/network*.png \
	static/tango/16x16/apps/system-users.png \
	static/tango/16x16/apps/utilities*.png \
	static/tango/16x16/emblems/emblem-unreadable.png \
	static/tango/16x16/actions/list*.png \
	static/tango/16x16/actions/go*.png \
	static/tango/16x16/actions/document-properties.png \
	alps/*.jpg \
	alps/*.css \
	ice/* \
	snow/* \
	clouds/* \
	wik/* \
	wik/images/*


EXTRA_DIST=README Makefile config.mk

DISTFILES=$(WWW_DIST) $(EXTRA_DIST) 

TAR=tar

P=$(PACKAGE)-$(VERSION)
tarball=$(P).tar.bz2
install_dir=$(DESTDIR)/$(wwwdir)/skins/

all:
clean:
	rm -rf $(tarball) $(P)

dist: $(tarball)

install:
	mkdir -p $(install_dir)
	for i in $(WWW_DIST); do\
		dest=`dirname "$(install_dir)/$$i"`;\
		mkdir -p "$$dest";\
		cp "$$i" "$$dest";\
	done

$(tarball):	$(DISTFILES)
	rm -rf $(P)
	mkdir -p $(P)
	for i in $(DISTFILES); do\
		dest=`dirname "$(P)/$$i"`;\
		mkdir -p "$$dest";\
		cp "$$i" "$$dest";\
	done
	$(TAR) -jcf $@ $(P)
	rm -rf $(P)

# target that creates a tar package, unpacks is and install from package
dist-install: $(tarball)
	$(TAR) -jxf $(tarball)
	$(MAKE) -C $(P) install DESTDIR=$(DESTDIR)
	rm -rf $(P)

include config.mk

.PHONY: all clean dist install dist-install
